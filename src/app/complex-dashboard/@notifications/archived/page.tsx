import Card from '@/components/Card';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <br/>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}