export const userColumns = [
  // { field: "id", headerName: "ID", width:0 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
];


export const bookColumns = [
  {field: "_id",headerName: "ID",width: 250},
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
];

export const roomColumns = [
  {field: "_id",headerName: "ID",width: 250},
  {
    field: "title",
    headerName: "Title",
    width: 250,
  }
];


