// User entity
export interface User {
  userId: string;
  fName: string;
  fUsername: string;
  profilePicUrl: string;
  baseUrl: string;
  tipHistory: Tip[];
}

// Creator entity
export interface Creator {
  creatorId: string;
  fName: string;
  fUsername: string;
  profilePicUrl: string;
  baseUrl: string;
  tipGoals: TipGoal[];
  tippingTiers: TippingTier[];
  exclusiveContent: ExclusiveContent[];
}

// Tip entity
export interface Tip {
  tipId: string;
  tipperId: string;
  creatorId: string;
  amount: number;
  timestamp: Date;
  message?: string;
  tierAchieved?: number;
  isPersonalized: boolean;
}

// TippingTier entity
export interface TippingTier {
  tierId: string;
  creatorId: string;
  level: number;
  minAmount: number;
  rewardDescription: string;
  rewardType: 'badge' | 'shoutout' | 'access' | 'other';
}

// TipGoal entity
export interface TipGoal {
  goalId: string;
  creatorId: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  imageUrl?: string;
}

// ExclusiveContent entity
export interface ExclusiveContent {
  contentId: string;
  creatorId: string;
  title: string;
  description: string;
  url: string;
  accessTier: number;
  unlockAmount: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Component props types
export interface TipButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface TierCardProps {
  tier: TippingTier;
  isActive: boolean;
  onSelect: () => void;
}

export interface GoalProgressProps {
  goal: TipGoal;
}

export interface ShoutOutFormProps {
  onSubmit: (message: string) => void;
}

export interface ContentCardProps {
  content: ExclusiveContent;
  isLocked: boolean;
  onUnlock: () => void;
}

// Mini-app specific types
export interface FrameContext {
  user?: User;
  creator?: Creator;
}

// Transaction types
export interface TipTransaction {
  to: string;
  amount: string;
  message?: string;
}

// Base Wallet types (simplified)
export interface WalletState {
  address?: string;
  isConnected: boolean;
}

