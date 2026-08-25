# ConnectConnectorCreateDataSubjectType

Which subject the connector issues tokens for. Defaults to \"app\" (connector-level keys). \"user\" connectors store no connector-level values; each user supplies their own key during authorization.

## Example Usage

```typescript
import { ConnectConnectorCreateDataSubjectType } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: ConnectConnectorCreateDataSubjectType = "user";
```

## Values

```typescript
"app" | "user"
```