import Main from '@/components/Main';
import Folio from '@/components/Folio';
export const revalidate = 7200
export default function HomePage() {
  return (
    <Main
      folioComponent={<Folio />}
    />
  );
}