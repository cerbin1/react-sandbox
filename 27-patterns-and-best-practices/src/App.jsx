import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title="We got 20 yers of experience"
          >
            <p>You cannot go wrong with us.</p>
            <p>Lorem ipsum</p>
          </Accordion.Item>
          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="We are working with local guides"
          >
            <p>We are not doing this along from our office.</p>
            <p>Lorem ipsum</p>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
