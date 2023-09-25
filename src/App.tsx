import Navbar from './assets/components/Navbar';

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">Heroo</section>
      <section className="padding">popular</section>
      <section className="padding">super qaulity</section>
      <section className="padding-x">service</section>
      <section className="padding">specialer offer</section>
      <section className="bg-pale-blue padding">Customer</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscrib</section>
      <section className="bg-black padding-x padding-t  pb-8">Footer</section>
    </main>
  );
};

export default App;
