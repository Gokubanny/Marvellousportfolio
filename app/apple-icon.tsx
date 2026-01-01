// Never use @iconify/react inside this file.
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 180,
  height: 180
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(

    <div data-editor-id="app/apple-icon.tsx:15:7"
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ABDFE8',
      borderRadius: 34,
      padding: 20
    }}>

        <img data-editor-id="app/apple-icon.tsx:26:9"
      src="https://storage.googleapis.com/cosmic-project-image-assets/images/96cb9b53-36b3-44ee-9010-43e45b24d708/marvellous-benji-high-resolution-logo-transparent_1.png"
      alt="Omatule Marvellous logo"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 10px rgba(158,202,214,0.6))'
      }} />

      </div>,

    {
      ...size
    }
  );
}