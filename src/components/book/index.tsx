import { BookView } from './BookView';
import { withBasicView } from '../view/withBasicView';

export default function BookPage() {
    const BookWithBasicView = withBasicView(BookView);

    return <BookWithBasicView />
}