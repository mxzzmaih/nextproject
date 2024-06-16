// components/AuthPage.tsx
import AuthTabs from '@/components/auth/AuthTabs';

const AuthPage = () => {
  const authContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const authBoxStyle = {
    background: '#fff',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '300px',
  };

  return (
    <div style={authContainerStyle}>
      <div style={authBoxStyle}>
        <AuthTabs />
      </div>
    </div>
  );
};

export default AuthPage;
