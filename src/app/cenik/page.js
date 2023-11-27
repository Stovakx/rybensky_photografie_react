import ContactBtn from "@/app/components/contactBtn/contactBtn";

export default function Cenik() {
  return (
    <div className="max-w-7xl min-h-full pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h2 className="text-2xl">Ceník mých služeb</h2>
        <p>Podobrobný ceník mých služeb se připravuje.</p>
      </main>
      <ContactBtn text={"kontaktujte mě"}/>
    </div>
  );
}
