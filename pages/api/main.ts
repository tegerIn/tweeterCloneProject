import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

interface ResponseType {
  ok: boolean;
  statusText?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const userData = req.body;

  const findUser = await db.user.findUnique({
    where: { email: userData.email },
  });
  console.log(findUser);
  if (!findUser) {
    const result = await db.user.create({ data: { ...userData } });
    console.log("111", result);
    return res.status(200).json({ ok: true });
  } else {
    return res
      .status(401)
      .json({ ok: false, statusText: "exist User! Please Login" });
  }
}
