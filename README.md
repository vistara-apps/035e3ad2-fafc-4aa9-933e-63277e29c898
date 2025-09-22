# GratitudeFlow

A Base Mini App that enhances creator tipping with gamification, personalized shout-outs, exclusive content access, and goal tracking.

## Features

- **Gamified Tipping Tiers**: Progress through tiers with cumulative tips and unlock rewards
- **Personalized Shout-outs**: Send custom messages with tips for direct creator connection
- **Exclusive Content Access**: Unlock special content by reaching tipping thresholds
- **Tipping Goal Tracker**: Visual progress tracking for creator goals and projects

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd gratitude-flow
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/).

3. **Run the development server**:
```bash
npm run dev
```

4. **Open in Base App**:
Navigate to `http://localhost:3000` in Base App or compatible Farcaster client.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main app page
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles and design tokens
├── components/            # React components
│   ├── AppShell.tsx       # Main app wrapper
│   ├── CreatorProfile.tsx # Creator information display
│   ├── TippingInterface.tsx # Main tipping functionality
│   ├── GoalTracker.tsx    # Goal progress visualization
│   ├── TierProgress.tsx   # Tier system display
│   └── ...               # Other UI components
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript type definitions
│   ├── mockData.ts       # Sample data for development
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    └── manifest.json     # Base Mini App manifest
```

## Design System

The app uses a custom design system with:

- **Colors**: Primary blue, accent teal, gradient backgrounds
- **Typography**: Responsive text scales with semantic naming
- **Components**: Modular, reusable UI components
- **Motion**: Smooth transitions and micro-interactions

## Key Components

### TippingInterface
Main component handling tip amounts, tier selection, and transaction processing.

### GoalTracker
Displays creator goals with progress bars and visual feedback.

### TierProgress
Shows available tipping tiers and user progression.

### CreatorProfile
Creator information, stats, and social proof.

## Development

### Adding New Features

1. Define types in `lib/types.ts`
2. Create components in `components/`
3. Add mock data in `lib/mockData.ts`
4. Integrate in main page

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the design system tokens
- Implement mobile-first responsive design
- Add smooth transitions for interactions

### Testing

```bash
npm run build    # Test production build
npm run lint     # Check code quality
```

## Deployment

1. **Build the application**:
```bash
npm run build
```

2. **Deploy to your preferred platform** (Vercel, Netlify, etc.)

3. **Update manifest.json** with your production URLs

4. **Submit to Base App** for discovery

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please open an issue or contact the development team.
