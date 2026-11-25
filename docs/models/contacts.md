# Contacts

Up to 3 contacts for the integration. `contact` comes first, followed by the confirmed owners of the team, longest-standing first. For a personal account, the account owner.

## Example Usage

```typescript
import { Contacts } from "@vercel/sdk/models/getaccountinfoop.js";

let value: Contacts = {
  email: "Camilla73@gmail.com",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |