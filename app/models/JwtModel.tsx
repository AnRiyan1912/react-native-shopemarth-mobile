export interface JwtModel {
  iss: string;
  sub: string;
  exp: number;
  iat: number;
  role: string;
  userId: string;
}
