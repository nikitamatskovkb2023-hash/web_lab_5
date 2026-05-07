import { useState, useEffect } from 'react';

function Footer() {
  const [sys, setSys] = useState({});

  useEffect(() => {
    const data = {
      platform: navigator.platform,
      browser: navigator.userAgent.split(' ').pop(),
      lang: navigator.language
    };
    localStorage.setItem('sysInfo_lab5', JSON.stringify(data));
    setSys(data);
  }, []);

  return (
    <div className="card">
      <h2>Системна інформація</h2>
      <div style={{fontSize: '12px', fontFamily: 'monospace'}}>
        <p>🖥️ Платформа: {sys.platform}</p>
        <p>🌐 Браузер: {sys.browser}</p>
        <p>📖 Мова: {sys.lang}</p>
      </div>
    </div>
  );
}

export default Footer;