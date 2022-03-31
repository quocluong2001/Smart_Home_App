# Tổng hợp API của server

## API của Device

Lấy tất cả device có trong database - Trả về array chứa Model của devices đó
```bash
GET - http://localhost:5000/api/devices
```

Lấy device theo Id của device - Trả về Model của device theo device_id đó
```bash
GET - http://localhost:5000/api/device/${device_id}
```

Lấy data theo của device theo Id - Trả về array các value của device
```bash
GET - http://localhost:5000/api/device/${device_id}/data
```

Thêm data vào adafruit của device theo Id - Trả về msg: 'New Data has been added' nếu thành công

```bash
POST - http://localhost:5000/api/device/${device_id}/data
```
```bash
Body Params:
{
    "value": 23
}
```

Thêm mới thiết bị - trả về msg: ' New device has been added successfully' nếu thành công
```bash
POST - http://localhost:5000/api/devices
```
```bash
Body Params:
{
    "room_name": "Room-Living",
    "device_name": "testlight1",
    "description":"light"
}
```

Cập nhật thiết bị (cập nhật tên thiết bị ) - trả về Model của device theo device_id đó
```bash
PUT - http://localhost:5000/api/device/${device_id}
```
```bash
Body Params:
{
    "device_name": "DinkCao"
}
```

Xóa thiết bị với device_id - trả về msg: 'Device has been deleted' nếu thành công
```bash
DELETE - http://localhost:5000/api/device/${device_id}
```

## API của Room
Lấy tất cả room có trong database - Trả về array chứa Model của rooms đó
```bash
GET - http://localhost:5000/api/rooms
```

Lấy room theo Id của room - Trả về Model của device theo room_id đó
```bash
GET - http://localhost:5000/api/room/${room_id}
```

Lấy devices theo của room theo Id - Trả về array các devices của room
```bash
GET - http://localhost:5000/api/room/${room_id}/devices
```

Thêm mới room - trả về msg: ' New room has been added successfully' nếu thành công
```bash
POST - http://localhost:5000/api/room
```
```bash
Body Params:
{
    "group_name":"deptraiii",
    "description":"dethuong"
}
```

Cập nhật room (cập nhật tên với mô tả ) - trả về Model của room theo room_id đó
```bash
PUT - http://localhost:5000/api/room/${room_id}
```
```bash
Body Params:
{
    "group_name": "LuongVanCuong",
    "description": "This is a group created by Postmanmmmm"
}
```

Xóa room với room_id - trả về msg: 'Room has been deleted' nếu thành công
```bash
DELETE - http://localhost:5000/api/room/${room_id}
```

## API của Type
Lấy tất cả type có trong database - Trả về array chứa Model của types đó
```bash
GET - http://localhost:5000/api/types
```

Lấy type theo Id của type - Trả về Model của type theo type_id đó
```bash
GET - http://localhost:5000/api/type/${type_id}
```

Lấy devices theo của type theo Id - Trả về array các devices của type
```bash
GET - http://localhost:5000/api/type/${type_id}/devices
```
