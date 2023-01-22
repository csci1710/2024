import {
  forgeDocsLink,
  EdStemLink,
  policies,
  guides,
  importantLinks,
} from "../SITE_DATA";

export default function Resources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      <div>
        <ResourceTitle name="Policies" />
        <div className="p-2" />
        {policies.map((policy) => (
          <Resource title={policy.name} href={policy.href} />
        ))}
      </div>
      <div>
        <ResourceTitle name="Guides" />
        <div className="p-2" />
        {guides.map((policy) => (
          <Resource title={policy.name} href={policy.href} />
        ))}
      </div>
      <div>
        <ResourceTitle name="Important Links" />
        <div className="p-2" />
        {importantLinks.map((policy) => (
          <Resource title={policy.name} href={policy.href} />
        ))}
      </div>
    </div>
  );
}

function Resource(props: { title: string; href: string }) {
  return (
    <div className=" p-1 text-left">
      <li>
        <a href={props.href} className="text-lg underline text-primary-800">
          {props.title}
        </a>
      </li>
    </div>
  );
}

function ResourceTitle(props: { name: string }) {
  return <h3 className="text-4xl font-title font-bold">{props.name}</h3>;
}
