const PageTitle = (props) => {
  return (
    <section className="page-title">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </section>
  );
};

export default PageTitle;
