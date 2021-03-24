import { listenerCount } from "node:events";
import React from "react";

interface IUser {
  id: number;
  phoneNumber: string;
  isFollow: boolean;
}

interface IData {
  [type: number]: {
    list: IUser[];
    error?: any;
    loading: boolean;
    page: number;
  };
}

const FriendListPage = () => {
  const [currentType, setType] = React.useState(0);
  const [shouldFetch, setShouldFetch] = React.useState(true);
  const [data, setData] = React.useState<IData>({
    0: {
      list: [],
      error: null,
      loading: false,
      page: 1,
    },
    1: {
      list: [],
      error: null,
      loading: false,
      page: 1,
    },
    2: {
      list: [],
      error: null,
      loading: false,
      page: 1,
    },
  });

  const follow = (id: number) => {};
  const unfollow = (id: number) => {};

  React.useEffect(() => {
    if (shouldFetch) {
      setData({
        ...data,
        [currentType]: {
          ...data[currentType],
          loading: true,
        },
      });
      // debug
      setTimeout(() => {
        setData({
          ...data,
          [currentType]: {
            ...data[currentType],
            loading: false,
            list: [
              ...data[currentType].list,
              ...[
                { id: 1, phoneNumber: "1234", isFollow: false },
                { id: 2, phoneNumber: "5678", isFollow: false },
                { id: 3, phoneNumber: "asfasdf", isFollow: false },
                { id: 4, phoneNumber: "4vi8c", isFollow: false },
                { id: 5, phoneNumber: "39394j", isFollow: false },
                { id: 6, phoneNumber: "58976", isFollow: false },
                { id: 7, phoneNumber: "181218", isFollow: false },
                { id: 8, phoneNumber: "38172", isFollow: false },
                { id: 9, phoneNumber: "10981", isFollow: false },
                { id: 10, phoneNumber: "9123", isFollow: false },
                { id: 11, phoneNumber: "58923", isFollow: false },
                { id: 12, phoneNumber: "48593", isFollow: false },
                { id: 13, phoneNumber: "35u213", isFollow: false },
                { id: 14, phoneNumber: "581739275", isFollow: false },
                { id: 15, phoneNumber: "981723", isFollow: false },
                { id: 16, phoneNumber: "9812371", isFollow: false },
                { id: 17, phoneNumber: "81638712", isFollow: false },
                { id: 18, phoneNumber: "81234", isFollow: false },
                { id: 19, phoneNumber: "1534", isFollow: false },
                { id: 20, phoneNumber: "4444", isFollow: false },
              ],
            ],
          },
        });
      }, 1000);
      setShouldFetch(false);
    }
  }, [shouldFetch]);
  return (
    <div>
      <ul>
        <li onClick={() => currentType !== 0 && setType(0)}>추천 리스트</li>
        <li onClick={() => currentType !== 1 && setType(1)}>팔로우</li>
        <li onClick={() => currentType !== 2 && setType(2)}>팔로워</li>
      </ul>
      <ul>
        {data[currentType].list.map((e) => (
          <li key={e.id}>
            <div>
              <span>{e.phoneNumber}</span>
              <button
                onClick={() => {
                  setData({
                    ...data,
                    [currentType]: {
                      ...data[currentType],
                      list: data[currentType].list.map((user) =>
                        user.id === e.id
                          ? { ...user, isFollow: !user.isFollow }
                          : user
                      ),
                    },
                  });
                  e.isFollow ? unfollow(e.id) : follow(e.id);
                }}
              >
                {e.isFollow ? "언팔로우" : "팔로우"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendListPage;
