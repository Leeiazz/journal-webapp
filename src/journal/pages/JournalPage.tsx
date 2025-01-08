import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NoteView></NoteView>
      </JournalLayout>
    </>
  );
};
