'use client';

import { useState, useEffect } from 'react';
import { WalletState } from '@/types';

export function useBaseWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
  });

  useEffect(() => {
    // Check if running in Base mini-app context
    if (typeof window !== 'undefined' && window.parent !== window) {
      // We're in an iframe (mini-app)
      // Listen for wallet connection messages
      const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'WALLET_CONNECTED') {
          setWalletState({
            address: event.data.address,
            isConnected: true,
          });
        } else if (event.data.type === 'WALLET_DISCONNECTED') {
          setWalletState({
            isConnected: false,
          });
        }
      };

      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, []);

  const connectWallet = () => {
    // Send message to parent frame to request wallet connection
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage({ type: 'CONNECT_WALLET' }, '*');
    }
  };

  const sendTip = async (to: string, amount: string, message?: string) => {
    if (!walletState.isConnected) {
      throw new Error('Wallet not connected');
    }

    // Send tip transaction request to parent frame
    return new Promise((resolve, reject) => {
      const handleResponse = (event: MessageEvent) => {
        if (event.data.type === 'TIP_SUCCESS') {
          window.removeEventListener('message', handleResponse);
          resolve(event.data.txHash);
        } else if (event.data.type === 'TIP_ERROR') {
          window.removeEventListener('message', handleResponse);
          reject(new Error(event.data.error));
        }
      };

      window.addEventListener('message', handleResponse);

      if (typeof window !== 'undefined' && window.parent !== window) {
        window.parent.postMessage({
          type: 'SEND_TIP',
          to,
          amount,
          message,
        }, '*');
      }

      // Timeout after 30 seconds
      setTimeout(() => {
        window.removeEventListener('message', handleResponse);
        reject(new Error('Transaction timeout'));
      }, 30000);
    });
  };

  return {
    ...walletState,
    connectWallet,
    sendTip,
  };
}

