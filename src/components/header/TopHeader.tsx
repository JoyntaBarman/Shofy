import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Container from '../Container';

export default function TopHeader() {
  return (
    <div className="bg-blackbg text-whiteText text-sm">
      <Container>
        <p className="flex space-x-2 items-center h-8">
          <GoArrowLeft /> <GoArrowRight />
          <span>
            Enjoy free shipping on all orders over $99! Shop now and save on
            delivery costs.
          </span>
        </p>
      </Container>
    </div>
  );
}
