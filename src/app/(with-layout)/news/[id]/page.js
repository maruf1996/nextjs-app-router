const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is Dynamic Page of Id: {params.id} </h1>
    </div>
  );
};

export default DynamicPage;
