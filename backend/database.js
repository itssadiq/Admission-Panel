const supabaseUrl = "https://oeqrtynoarrzcnokmjek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcXJ0eW5vYXJyemNub2ttamVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MTE4ODksImV4cCI6MjA2NDA4Nzg4OX0.qXJ2mbIxv5_XUjNhL-Zm_77V8EOSKHY3py8WD5zD3UA";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

export async function saveSignUpDetailsToDB(
  full_name,
  email_address,
  password
) {
  const { error } = await supabase
    .from("sign_up_details")
    .insert({ full_name, email_address, password });

  if (error) {
    throw error;
  }
}

export async function fetchUserDetailsFromDB() {
  const { data, error } = await supabase.from("sign_up_details").select();

  if (error) {
    throw error;
  }

  const loginDetails = data;
  return loginDetails;
}

export async function saveApplicationToDB(
  id,
  full_name,
  father_name,
  email,
  phone_number,
  dob,
  gender,
  address,
  city,
  qualification,
  passing_year,
  institute_name,
  program_1,
  program_2
) {
  const { error } = await supabase.from("students-applications").insert({
    id,
    full_name,
    father_name,
    email,
    phone_number,
    dob,
    gender,
    address,
    city,
    qualification,
    passing_year,
    institute_name,
    program_1,
    program_2,
  });

  if (error) {
    throw error;
  }
}

export async function fetchApplicationDetailFromDB() {
  const { data, error } = await supabase.from("students-applications").select();

  if (error) {
    throw error;
  }

  const applications = data;
  return applications;
}
