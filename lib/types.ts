export interface User {
  userId: string;
  fName: string;
  fUsername: string;
  profilePicUrl: string;
  baseUrl: string;
  tipHistory: Tip[];
}

export interface Creator {
  creatorId: string;
  fName: string;
  fUsername: string;
  profilePicUrl: string;
  baseUrl: string;
  tipGoals: TipGoal[];
  tippingTiers: TippingTier[];
  exclusiveContent: ExclusiveContent[];
  tipHistory: Tip[];
}

export interface Tip {
  tipId: string;
  tipperId: string;
  creatorId: string;
  amount: number;
  timestamp: Date;
  message: string;
  tierAchieved: number;
  isPersonalized: boolean;
}

export interface TippingTier {
  tierId: string;
  creatorId: string;
  level: number;
  minAmount: number;
  rewardDescription: string;
  rewardType: 'badge' | 'shoutout' | 'content' | 'early_access';
  icon?: string;
  color?: string;
}

export interface TipGoal {
  goalId: string;
  creatorId: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  imageUrl?: string;
  isActive: boolean;
  deadline?: Date;
}

export interface ExclusiveContent {
  contentId: string;
  creatorId: string;
  title: string;
  description: string;
  url: string;
  accessTier: number;
  unlockAmount: number;
  contentType: 'video' | 'audio' | 'text' | 'image';
}

export interface TipTransaction {
  transactionId: string;
  tipId: string;
  blockHash?: string;
  status: 'pending' | 'confirmed' | 'failed';
  gasUsed?: number;
  timestamp: Date;
}
