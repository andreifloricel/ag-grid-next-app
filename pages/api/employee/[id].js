export default async function handler(req, res) {
  const { id } = req.query;
  res.json({
    rows: [
      {
        id: id,
        first_name: "first" + id,
        last_name: "last" + id,
        email: "member" + id + "@company.com",
        phone: "12345" + id,
        office: "place" + id,
        job_title: "Worker " + id,
      },
    ],
  });
}
