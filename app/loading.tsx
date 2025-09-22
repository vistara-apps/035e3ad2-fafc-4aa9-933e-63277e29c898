export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-accent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">GratitudeFlow</h2>
          <p className="text-white/80">Loading your tipping experience...</p>
        </div>
      </div>
    </div>
  );
}
