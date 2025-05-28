import Main from '@/components/Main';
import Folio from '@/components/Folio';

export default function HomePage() {
  return (
    <Main
      folioComponent={<Folio />}
    />
  );
}