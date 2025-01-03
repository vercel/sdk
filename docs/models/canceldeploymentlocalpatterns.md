# CancelDeploymentLocalPatterns

## Example Usage

```typescript
import { CancelDeploymentLocalPatterns } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentLocalPatterns = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pathname`                                                                                                             | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal or wildcard. Single `*` matches a single path segment. Double `**` matches any number of path segments. |
| `search`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal query string such as `?v=1` or empty string meaning no query string.                                    |