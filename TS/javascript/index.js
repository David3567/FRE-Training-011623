var Role;
(function (Role) {
    Role["USER"] = "user";
    Role[Role["SUPER"] = 4] = "SUPER";
    Role[Role["ADMIN"] = 5] = "ADMIN";
})(Role || (Role = {}));
var p = Role.ADMIN;
console.log(p);
//# sourceMappingURL=index.js.map