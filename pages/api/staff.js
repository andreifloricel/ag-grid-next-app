export default async function handler(req, res) {
  const staff = [];

  for (let id = 1; id <= 1000; id++) {
    staff.push({
      id: id,
      first_name: "first" + id,
      last_name: "last" + id,
      email: "member" + id + "@company.com",
      phone: "12345" + id,
      office: "place" + id,
      job_title: "Worker " + id,
    });
  }
  res.json({ rows: staff });
}
