# User

Metadata for the User who generated the event.

## Example Usage

```typescript
import { User } from "@vercel/sdk/models/userevent.js";

let value: User = {
  avatar: "https://picsum.photos/seed/XH6yIN1I/1017/2664",
  email: "Ned70@hotmail.com",
  uid: "<id>",
  username: "Lexus.Prohaska50",
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