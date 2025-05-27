import Main from '@/components/Main';
import Folio from '@/components/Folio';

export default function HomePage() {
  return (
    <Main
      folioComponent={<Folio />} // Folio is rendered on the server, its HTML is passed
    />
  );
}