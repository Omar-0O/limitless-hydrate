// الخطوة 3: استيراد الهيدر في الأعلى
import Header from './components/Header'; // <-- تأكد من صحة المسار
// الدالة الرئيسية للصفحة
export default function Home() { // أو function Page()
  return (
    // العنصر الرئيسي الذي يحيط بمحتوى الصفحة
    <main>

      {/* الخطوة 4: استخدام الهيدر هنا */}
      <Header />

      {/* يمكنك إضافة أي محتوى آخر للصفحة الرئيسية هنا */}
      <h1 className="text-center text-2xl mt-10">
        مرحباً بك في Limitless Hydrate!
      </h1>
      <p className="text-center mt-4">
        الصفحة الرئيسية قيد الإنشاء...
      </p>

    </main>
  );
}