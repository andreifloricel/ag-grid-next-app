import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const StaffInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [staff, setStaff] = useState({});

  useEffect(() => {
    setStaff({
      id: id,
      first_name: "first" + id,
      last_name: "last" + id,
      email: "member" + id + "@company.com",
      phone: "12345" + id,
      office: "place" + id,
      job_title: "Worker " + id,
    });
  }, [id]);

  return (
    <div className="staff_info">
      <div className="staff_name">
        {staff.first_name} {staff.last_name}
      </div>
      <div className="job_info">
        {staff.job_title}
        <br />
        {staff.office} office
      </div>
      <div className="contact_info">
        {staff.email}
        <br />
        {staff.phone}
      </div>
    </div>
  );
};

export default StaffInfo;
