# GratitudeFlow

**Tip creators, unlock rewards, and fuel their next big thing—all in one stream.**

A Base mini-app that enhances creator tipping with gamification, personalized shout-outs, exclusive content access, and goal tracking.

## Features

### 🎯 Core Features

- **Gamified Tipping Tiers**: Creators set tiered tipping levels with rewards (badges, shout-outs, early access)
- **Personalized Shout-outs**: Tippers include custom messages for creator responses
- **Exclusive Content Access**: Gate content behind tipping thresholds or tiers
- **Tipping Goal Tracker**: Visual progress bars showing creator goals and tipper impact

### 🎨 Design System

- **Primary Color**: `hsl(240 88% 53%)` - Deep purple
- **Accent Color**: `hsl(177 74% 55%)` - Teal green
- **Background**: `hsl(220 38% 97%)` - Light gray
- **Typography**: Inter font family with custom sizing

### 🛠️ Technical Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Blockchain**: Base network integration
- **Wallet**: Base Wallet SDK
- **Deployment**: Vercel (recommended for mini-apps)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Base Wallet (for testing transactions)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gratitude-flow
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# Add other environment variables as needed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## API Documentation

### Creator Data API

**GET** `/api/creator/[id]`

Returns creator information including goals, tiers, and exclusive content.

**Response:**
```json
{
  "success": true,
  "data": {
    "creatorId": "string",
    "fName": "string",
    "fUsername": "string",
    "profilePicUrl": "string",
    "baseUrl": "string",
    "tipGoals": [...],
    "tippingTiers": [...],
    "exclusiveContent": [...]
  }
}
```

### Tip Processing API

**POST** `/api/tip`

Processes a tip transaction and updates creator goals.

**Request Body:**
```json
{
  "tipperId": "string",
  "creatorId": "string",
  "amount": "number",
  "message": "string (optional)",
  "tierAchieved": "number (optional)"
}
```

## Farcaster Frame Integration

The app includes Farcaster frame metadata for seamless integration with Farcaster clients.

### Frame Meta Tags

```html
<meta property="fc:frame" content="vNext" />
<meta property="fc:frame:image" content="/frame-image.svg" />
<meta property="fc:frame:button:1" content="Tip Creator" />
<meta property="fc:frame:button:1:action" content="post" />
<meta property="fc:frame:post_url" content="/api/frame" />
```

## Component Architecture

### Core Components

- **AppShell**: Main layout wrapper
- **TipButton**: Reusable button for tipping actions
- **TierCard**: Displays tipping tier information
- **GoalProgress**: Shows goal completion progress
- **ShoutOutForm**: Form for personalized messages
- **ContentCard**: Displays exclusive content

### Custom Hooks

- **useBaseWallet**: Manages Base wallet connection and transactions
- **useCreatorData**: Fetches and manages creator data

## Data Models

### User
```typescript
interface User {
  userId: string;
  fName: string;
  fUsername: string;
  profilePicUrl: string;
  baseUrl: string;
  tipHistory: Tip[];
}
```

### Creator
```typescript
interface Creator {
  creatorId: string;
  fName: string;
  fUsername: string;
  profilePicUrl: string;
  baseUrl: string;
  tipGoals: TipGoal[];
  tippingTiers: TippingTier[];
  exclusiveContent: ExclusiveContent[];
}
```

### Tip
```typescript
interface Tip {
  tipId: string;
  tipperId: string;
  creatorId: string;
  amount: number;
  timestamp: Date;
  message?: string;
  tierAchieved?: number;
  isPersonalized: boolean;
}
```

## Business Model

- **Type**: Micro-transactions
- **Pricing**: Tiered tipping with optional premium features
- **Target**: Free core tipping, premium features for enhanced engagement

## User Flows

### Tipping Flow
1. User views creator profile/frame
2. User clicks "Tip Creator" button
3. User selects tip amount and optional message
4. User reviews transaction in Base Wallet
5. Transaction submitted to Base blockchain
6. User sees confirmation and updated progress

### Creator Setup Flow
1. Creator defines tipping goals and tiers
2. Creator deploys smart contracts
3. Creator shares GratitudeFlow frame link

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Environment Variables

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
# Add Base network configuration
# Add wallet connection settings
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Join our Discord community
- Check the documentation

---

**Built with ❤️ for the creator economy on Base**

