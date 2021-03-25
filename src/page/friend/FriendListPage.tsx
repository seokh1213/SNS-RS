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
    total: number;
  };
}

interface IProps {
  setPath?: any;
}

const FriendListPage = ({ setPath }: IProps) => {
  setPath && setPath();
  const token = localStorage.getItem("token");
  const [currentType, setType] = React.useState(0);
  const [shouldFetch, setShouldFetch] = React.useState(true);
  const [data, setData] = React.useState<IData>({
    0: {
      list: [
        { id: 1, phoneNumber: "01012345678", isFollow: false },
        { id: 2, phoneNumber: "01012345678", isFollow: false },
      ],
      error: null,
      loading: false,
      page: 0,
      total: 0,
    },
    1: {
      list: [],
      error: null,
      loading: false,
      page: 0,
      total: 0,
    },
    2: {
      list: [],
      error: null,
      loading: false,
      page: 0,
      total: 0,
    },
  });

  const follow = (id: number) => {
    fetch(process.env.REACT_APP_API_URL + "/follow?opponent=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token!,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };
  const unfollow = (id: number) => {
    fetch(process.env.REACT_APP_API_URL + "/unfollow?opponent=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token!,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };
  const fetchList = () => {
    const urlMap = ["/recommend", "/follows", "/followers"];
    fetch(
      process.env.REACT_APP_API_URL +
        urlMap[currentType] +
        "?page=" +
        (data[currentType].page + 1),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token!,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.ok) {
          setData({
            ...data,
            [currentType]: {
              loading: false,
              list: [...data[currentType].list, ...json.list],
              error: null,
              page: json.page,
              total: json.total,
            },
          });
        }
      });
  };

  React.useEffect(() => {
    if (shouldFetch) {
      setData({
        ...data,
        [currentType]: {
          ...data[currentType],
          loading: true,
        },
      });

      fetchList();

      setShouldFetch(false);
    }
  }, [shouldFetch]);
  return (
    <div className=" w-3/4 max-w-2xl mx-auto mt-10 flex flex-col flex-1">
      <ul className="ml-4 flex text-gray-700">
        <li
          className={`cursor-pointer mr-4 ${
            currentType === 0 && "text-blue-500"
          }`}
          onClick={() => currentType !== 0 && setType(0)}
        >
          추천
        </li>
        <li
          className={`cursor-pointer mr-4 ${
            currentType === 1 && "text-blue-500"
          }`}
          onClick={() => currentType !== 1 && setType(1)}
        >
          팔로우
        </li>
        <li
          className={`cursor-pointer mr-4 ${
            currentType === 2 && "text-blue-500"
          }`}
          onClick={() => currentType !== 2 && setType(2)}
        >
          팔로워
        </li>
      </ul>
      <ul className="flex-1 bg-white mt-2 rounded-sm border">
        {data[currentType].list.map((e) => (
          <li
            key={e.id}
            className="h-12 p-4 flex items-center border-b border-gray-100"
          >
            <span className="text-gray-600 flex-1">{e.phoneNumber}</span>
            <button
              className={`h-7 rounded-md px-2 text-sm ${
                e.isFollow
                  ? "border border-gray-300 bg-white text-gray-500"
                  : "bg-blue-500 text-white"
              }`}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendListPage;
