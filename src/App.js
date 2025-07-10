import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: "'Comic Sans MS', cursive",
      backgroundColor: '#ffe6f0',
      padding: '20px'
    }}>
      <header style={{
        backgroundColor: '#5a479e',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        📦 ¡Envíos gratis por compras sobre $30.000 en Stgo!
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '20px'
      }}>
        <img src="Logo-_1_.ico" alt="Logo" style={{ height: '100px' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="https://www.instagram.com/happy.maydem" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram" width="25" />
          </a>
          <a href="https://www.facebook.com/people/Happy-Maydem/100092744970823/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" width="25" />
          </a>
          <a href="https://www.tiktok.com/@happy.maydem" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" alt="TikTok" width="24" />
          </a>
          <input
            type="text"
            placeholder="¿Qué quieres buscar?"
            style={{
              padding: '8px 12px',
              border: '2px solid pink',
              borderRadius: '20px',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      <nav style={{
        backgroundColor: '#fdaecb',
        textAlign: 'center',
        padding: '10px 0',
        fontWeight: 'bold'
      }}>
        <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>INICIO</a>
        <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>PAPELERÍA</a>
        <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>PELUCHES</a>
        <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>ACCESORIOS</a>
        <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>KPOP</a>
        <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>ANIME</a>
      </nav>

      <main style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '30px'
      }}>
        <div style={{
          width: '200px',
          backgroundColor: 'white',
          border: '2px dashed pink',
          borderRadius: '10px',
          padding: '10px',
          textAlign: 'center'
        }}>
          <img src="https://via.placeholder.com/200" alt="Producto 1" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Stickers BTS</h3>
          <p>$1.000</p>
          <a href="#" style={{
            display: 'inline-block',
            marginTop: '10px',
            backgroundColor: 'pink',
            padding: '6px 12px',
            borderRadius: '5px',
            color: 'black',
            textDecoration: 'none'
          }}>Comprar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
