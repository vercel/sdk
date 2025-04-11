# User

Metadata for the User who generated the event.

## Example Usage

```typescript
import { User } from "@vercel/sdk/models/userevent.js";

let value: User = {
  avatar: "https://loremflickr.com/2014/619?lock=4777752609260298",
  email: "Robyn.Stracke76@hotmail.com",
  uid: "<id>",
  username: "Hannah.Grant",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `avatar`           | *string*           | :heavy_check_mark: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_minus_sign: | N/A                |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `username`         | *string*           | :heavy_check_mark: | N/A                |