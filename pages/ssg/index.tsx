import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { IUser } from "../../appInterface/user";
const SSGUser = ({
  postUser,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(postUser);
  return (
    <div>
      <div>
        SSGUser
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {postUser?.map((item: IUser, index: number) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SSGUser;
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const postUser: IUser[] = await res.json();
  return {
    props: {
      postUser,
    },
  };
};
