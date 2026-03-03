// app/become-mentor/page.tsx
import BecomeMentorForm from "@/components/become-mentor/BecomeMentorForm";

export default function BecomeMentorPage() {
  return (
    <main className="min-h-screen bg-[#0B0D11] text-white flex flex-col items-center px-4 pt-20 pb-24">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-7xl font-semibold">
          Become a Mentor
        </h1>
        <p className="mt-5 text-white/60 text-sm md:text-2xl">
          Takes 2 minutes. Help someone who's exactly where you were.
        </p>
      </div>

      {/* Form */}
      <div className="mt-12 w-full flex justify-center">
        <BecomeMentorForm />
      </div>
    </main>
  );
}