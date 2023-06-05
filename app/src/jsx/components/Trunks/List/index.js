import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ListTrunks = () => {
   return (
      <div className="h-80">
         <div className="d-flex flex-wrap mb-4 row">
            <div className="col-xl-3 col-lg-4 mb-2">
               {/* <h6 className="text-black fs-16 font-w600 mb-1">
                  45 trunks
               </h6> */}
            </div>
            <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
            </div>
         </div>
         <div className="row flex-wrap bg-white rounded py-3 px-md-3 mb-4 create-trunk-list">
            No trunks listed
            <a class="btn btn-primary btn-rounded mb-2" href="/react/demo/trunks/create-trunk">Create New Trunk</a>
         </div>
         {/* <div className="row">
            <div className="col-xl-12">
               <div className="table-responsive">
                  <div
                     id="example5_wrapper"
                     className="dataTables_wrapper no-footer"
                  >

                     {/* <table
                        className="table display mb-4 dataTablesCard card-table dataTable no-footer"
                        id="example5"
                        role="grid"
                        aria-describedby="example5_info"
                     >
                        <thead>
                           <tr role="row">
                              <th
                                 className="sorting_asc"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-sort="ascending"
                                 aria-label="
										: activate to sort column descending"
                                 style={{ width: 24 }}
                              >
                                 <div className="checkbox mr-0 align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="checkAll"
                                          required
                                       />
                                       <label
                                          className="custom-control-label"
                                          htmlFor="checkAll"
                                       />
                                    </div>
                                 </div>
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="ID: activate to sort column ascending"
                                 style={{ width: 50 }}
                              >
                                 ID
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Company: activate to sort column ascending"
                                 style={{ width: 216 }}
                              >
                              Name
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Status: activate to sort column ascending"
                                 style={{ width: 164 }}
                              >
                                 Status
                              </th>
                             <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Status: activate to sort column ascending"
                                 style={{ width: 164 }}
                              >
                                 Actions
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr role="row" className="odd">
                              <td className="sorting_1">
                                 <div className="checkbox mr-0 align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="check1"
                                          required
                                       />
                                       <label
                                          className="custom-control-label"
                                          htmlFor="check1"
                                       />
                                    </div>
                                 </div>
                              </td>
                              <td>#APL-0003</td>
                              <td>June 1, 2020, 08:22 AM</td>
                              <td>
                                 <div className="media">
                                    <svg
                                       className="mr-3"
                                       width={50}
                                       height={50}
                                       viewBox="0 0 50 50"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                          fill="#D3D3D3"
                                       />
                                       <path
                                          d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                          fill="#F0780A"
                                       />
                                       <path
                                          d="M12.8892 12.8887C14.4645 11.3134 16.3346 10.0638 18.3928 9.21129C20.451 8.35875 22.657 7.91996 24.8848 7.91996C27.1126 7.91996 29.3185 8.35875 31.3767 9.21129C33.4349 10.0638 35.305 11.3134 36.8803 12.8887C38.4556 14.464 39.7052 16.3341 40.5577 18.3923C41.4103 20.4505 41.8491 22.6565 41.8491 24.8842C41.8491 27.112 41.4103 29.318 40.5577 31.3762C39.7052 33.4344 38.4556 35.3045 36.8803 36.8798L30.8825 30.882C31.6702 30.0944 32.295 29.1593 32.7212 28.1302C33.1475 27.1011 33.3669 25.9981 33.3669 24.8842C33.3669 23.7704 33.1475 22.6674 32.7212 21.6383C32.295 20.6092 31.6702 19.6741 30.8825 18.8865C30.0949 18.0988 29.1598 17.474 28.1307 17.0478C27.1016 16.6215 25.9987 16.4021 24.8848 16.4021C23.7709 16.4021 22.6679 16.6215 21.6388 17.0478C20.6097 17.474 19.6746 18.0988 18.887 18.8865L12.8892 12.8887Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M12.8892 36.8798C9.70778 33.6984 7.92048 29.3835 7.92048 24.8843C7.92048 20.385 9.70778 16.0701 12.8892 12.8887C16.0706 9.70727 20.3856 7.91997 24.8848 7.91996C29.384 7.91996 33.6989 9.70726 36.8803 12.8887L30.8825 18.8865C29.2918 17.2958 27.1344 16.4021 24.8848 16.4021C22.6352 16.4021 20.4777 17.2958 18.887 18.8865C17.2963 20.4772 16.4026 22.6346 16.4026 24.8843C16.4026 27.1339 17.2963 29.2913 18.887 30.882L12.8892 36.8798Z"
                                          fill="white"
                                       />
                                    </svg>
                                    <div className="media-body text-nowrap">
                                       <h6 className="text-black font-w600 fs-16 mb-0">
                                          Mosciski Inc.
                                       </h6>
                                       <span className="fs-14">
                                          Creative Design Agency
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td>FREELANCE</td>
                           </tr>
                        </tbody>
                     </table> 
                     <div className="d-flex align-items-center justify-content-between pb-2">
                        <div
                           className="dataTables_info"
                           id="example5_info"
                           role="status"
                           aria-live="polite"
                        >
                           Showing 1 to 6 of 6 entries
                        </div>
                        <div
                           className="dataTables_paginate paging_simple_numbers"
                           id="example5_paginate"
                        >
                           <Link to={"#"}
                              className="paginate_button previous disabled"
                              aria-controls="example5"
                              data-dt-idx={0}
                              tabIndex={0}
                              id="example5_previous"
                           >
                              Previous
                           </Link>
                           <span>
                              <Link to={"#"}
                                 className="paginate_button current"
                                 aria-controls="example5"
                                 data-dt-idx={1}
                                 tabIndex={0}
                              >
                                 1
                              </Link>
                           </span>
                           <Link to={"#"}
                              className="paginate_button next disabled"
                              tabIndex={0}
                              id="example5_next"
                           >
                              Next
                           </Link>
                        </div>
                     </div> 
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   );
};

export default ListTrunks;
