# User

Metadata for {@link userId}.

## Example Usage

```typescript
import { User } from "@vercel/sdk/models/userevent.js";

let value: User = {
  avatar: "https://loremflickr.com/2014/619?lock=4777752609260298",
  username: "Pearline34",
  email: "Hannah.Grant@gmail.com",
  uid: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `slug`             | *string*           | :heavy_minus_sign: | N/A                |
| `avatar`           | *string*           | :heavy_check_mark: | N/A                |
| `username`         | *string*           | :heavy_check_mark: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |