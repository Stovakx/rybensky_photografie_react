import ContactBtn from '@/app/components/contactBtn/contactBtn';
export default function Home() {
  return (
    <div className="max-w-7xl pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h1 className="text-4xl">Vítejte na mých webových stránkách</h1>
        <p className="mt-6">
          Mé jméno je Tomáš a jsem vášnivým fotografem. Ať už chcete vyfotit
          portrétní fotografie, párové nebo třeba svého mazlíčka, neváhejte mě
          kontaktovat. Na jakékoliv dotazy Vám velmi rád odpovím. Budu se na Vás
          těšit a doufám, že i vy budete mít zážitek a krásné fotky. Děkuji všem
          za zájem.
        </p>
      </main>
      {/* gallery napsat json data pro fotky, map přes id, kontrola length */}
      <div className="gallery">

      </div>
      <div
        className="about mt-10 
            rounded-xl
            ring-2 ring-offset-2 ring-gray-100 ring-opacity-50
            shadow-xl
            p-5"
      >
        <h2 className="text-2xl text-center mb-4">O mně</h2>
        <section className="px-3">
          <p className="mt-4">
            Moje jméno je Tomáš Rybenský a jsem svářeč. Ale nebojte se, sváry
            nefotím. Fotím štěstí, lásku a úsměvy. K fotografování jsem se už
            dostal jako malý kluk, ale věnovat jsem se tomu začal okolo roku
            2017. Tehdy jsem si pořídil svůj první foťák Canon. Naplno jsem se
            tomu začal věnovat při pořízení našeho chrta. Doladil jsem si
            techniku a vyráželi jsme ven zachytávat momenty při tréninku. Poté
            se začali ozývat i lidé na portrétní focení. A to nadšení a vášeň mi
            zůstala. Nyní již zachytávám momenty a příběhy skrz objektiv.
            <br />
            A tyto momenty nabízím i Vám. Neváhejte mne proto kontaktovat.
            <br />
            Působím hlavně v Pardubickém kraji, ale po domluvě se mohu vydat i
            na delší cestu za Vámi. Cestování je má druhá vášeň, tak je možnost
            skloubit příjemné s užitečným.
            <br />
            Děkuji za Vaši důvěru a budu se velmi těšit na spolupráci.
          </p>
        </section>
      </div>
      <ContactBtn/>
    </div>
  );
}
