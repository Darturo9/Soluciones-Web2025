import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Soluciones Web - Desarrollo de Software y Automatizaciones'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712',
          backgroundImage: 'radial-gradient(circle at top, #1e1b4b 0%, #030712 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 0,
            }}
          >
            Soluciones Web
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#9ca3af',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            Sistemas a Medida | Automatizaciones | APIs
          </p>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              padding: '12px 32px',
              borderRadius: 9999,
              border: '1px solid #374151',
              color: '#9ca3af',
              fontSize: 24,
            }}
          >
            soluciones-web.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
