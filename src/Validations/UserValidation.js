const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "Nama harus diisi";
  }

  if (!values.email || values.email === "") {
    errors.email = "Email harus diisi";
  }

  if (!values.telp || values.telp === "") {
    errors.telp = "Nomor Telepon harus diisi";
  }

  if (!values.nik || values.nik === "") {
    errors.nik = "NIK harus diisi";
  }

  if (!values.kk || values.kk === "") {
    errors.kk = "KK harus diisi";
  }
  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }
  if (!values.rt || values.rt === "") {
    errors.rt = "RT harus diisi";
  }
  if (!values.rw || values.rw === "") {
    errors.rw = "RW harus diisi";
  }
  if (!values.kodpeos || values.kodpeos === "") {
    errors.kodpeos = "Kodepos harus diisi";
  }
  return errors;
};

export default UserValidation;
