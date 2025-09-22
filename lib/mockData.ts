import type { Creator, TipGoal, TippingTier, ExclusiveContent } from './types';

export const mockCreator: Creator = {
  creatorId: 'creator_1',
  fName: 'Alex Chen',
  fUsername: 'alexcreates',
  profilePicUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  baseUrl: 'https://base.org/alexcreates',
  tipGoals: [],
  tippingTiers: [],
  exclusiveContent: [],
  tipHistory: []
};

export const mockGoals: TipGoal[] = [
  {
    goalId: 'goal_1',
    creatorId: 'creator_1',
    title: 'New Camera Equipment',
    description: 'Help me upgrade my camera gear to create better content for you!',
    targetAmount: 1000,
    currentAmount: 650,
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=200&fit=crop',
    isActive: true,
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
  },
  {
    goalId: 'goal_2',
    creatorId: 'creator_1',
    title: 'Studio Lighting Setup',
    description: 'Professional lighting will make my videos look amazing!',
    targetAmount: 500,
    currentAmount: 120,
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=200&fit=crop',
    isActive: true
  }
];

export const mockTiers: TippingTier[] = [
  {
    tierId: 'tier_1',
    creatorId: 'creator_1',
    level: 1,
    minAmount: 5,
    rewardDescription: 'Supporter Badge + Thank You Message',
    rewardType: 'badge',
    icon: '🌟',
    color: '#FFD700'
  },
  {
    tierId: 'tier_2',
    creatorId: 'creator_1',
    level: 2,
    minAmount: 25,
    rewardDescription: 'Personal Shout-out + Supporter Badge',
    rewardType: 'shoutout',
    icon: '🎯',
    color: '#FF6B6B'
  },
  {
    tierId: 'tier_3',
    creatorId: 'creator_1',
    level: 3,
    minAmount: 50,
    rewardDescription: 'Exclusive Content Access + All Previous Rewards',
    rewardType: 'content',
    icon: '👑',
    color: '#4ECDC4'
  },
  {
    tierId: 'tier_4',
    creatorId: 'creator_1',
    level: 4,
    minAmount: 100,
    rewardDescription: 'Early Access to New Content + VIP Status',
    rewardType: 'early_access',
    icon: '💎',
    color: '#A8E6CF'
  }
];

export const mockExclusiveContent: ExclusiveContent[] = [
  {
    contentId: 'content_1',
    creatorId: 'creator_1',
    title: 'Behind the Scenes: My Creative Process',
    description: 'See how I plan and create my content from start to finish',
    url: '/exclusive/behind-scenes-1',
    accessTier: 3,
    unlockAmount: 50,
    contentType: 'video'
  },
  {
    contentId: 'content_2',
    creatorId: 'creator_1',
    title: 'Unreleased Track Preview',
    description: 'Get early access to my latest music before anyone else',
    url: '/exclusive/track-preview-1',
    accessTier: 4,
    unlockAmount: 100,
    contentType: 'audio'
  }
];
