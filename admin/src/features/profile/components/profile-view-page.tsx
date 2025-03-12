import PageContainer from '@/components/layout/page-container';
import ProfileCreateForm from './profile-create-form';

export default function ProfileViewPage() {
  return (
    <PageContainer>
      <div className='w-full space-y-4'>
        <ProfileCreateForm categories={[]} initialData={null} />
      </div>
    </PageContainer>
  );
}
