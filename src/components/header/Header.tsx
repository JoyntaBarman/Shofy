import BottomHeader from './BottonHeader';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <div>
      {/* Top header */}
      <TopHeader />
      {/* Middle header */}
      <MiddleHeader />
      {/* Bottom header */}
      <BottomHeader/>
    </div>
  );
}
