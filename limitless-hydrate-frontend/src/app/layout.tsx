import Header from './components/Header'; // تأكد من المسار الصحيح
import './globals.css' // أو مسار ملف CSS العام

export default function Home() { // أو اسم الدالة الموجود
  return (
    <main> {/* أو أي عنصر حاوية رئيسي */}
      <Header /> {/* <-- استخدام الهيدر */}

      {/* باقي محتوى الصفحة الرئيسية */}
      <h1>Welcome to Limitless Hydrate!</h1>

    </main>
  );
}