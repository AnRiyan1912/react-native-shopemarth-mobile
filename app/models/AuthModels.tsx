export interface AuthModelLogin {
  username: string;
  password: string;
}
export interface AuthModelRegister {
  username: string;
  password: string;
  customerName: string;
  address: string;
  mobilePhone: string;
  email: string;
}

export interface Customer {
  id: string;
  customerName: string;
  address: string;
  phone: string;
  email: string;
}

interface UserCredential {
  id: string;
  username: string;
  role: string;
}
export interface Admin {
  id: string;
  name: string;
  phoneNumber: string;
  userCredential: UserCredential;
}
