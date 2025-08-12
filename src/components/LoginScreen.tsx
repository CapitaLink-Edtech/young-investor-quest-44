export const LoginScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center animate-fade-in">
      <div className="text-center p-8">
        <div className="bg-capitalink-cream rounded-2xl px-8 py-6 shadow-glow mb-8">
          <h1 className="text-3xl font-bold text-capitalink-blue">
            CapitaLink
          </h1>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-capitalink-gold/20">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Fazer Login
          </h2>
          
          <div className="space-y-4">
            <div className="text-muted-foreground">
              Tela de login em desenvolvimento...
            </div>
            
            <div className="text-sm text-capitalink-gold">
              ✨ Em breve você poderá fazer login e começar sua jornada de investimentos!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};