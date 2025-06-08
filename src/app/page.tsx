import Main from '@/components/Main';
import Folio from '@/components/Folio';
export const dynamic = 'force-dynamic'
export default function HomePage() {
  return (
    <Main
      folioComponent={<Folio />}
    />
  );
}