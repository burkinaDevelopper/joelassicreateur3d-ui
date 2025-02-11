// @ts-nocheck

import React, { useState } from 'react';
import { PageProps as InertiaPageProps } from '@inertiajs/core';

import {  Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious } from '@/Components/ui/pagination';
import PropsPagination from '@/types/pagination';
import { usePage } from '@inertiajs/react';

export interface PageProps extends InertiaPageProps {
  auth?: {
    user: {
      id: number;
      name: string;
    };
  };
  ziggy?: { [key: string]: any };
  [key: string]: any; // Signature d'index dynamique
}

interface Props{
    links:PropsPagination[],
    itemsPerPage:number,
}
const Paginations:React.FC<Props> = ({links, itemsPerPage}) => {
   
  const { url } = usePage<PageProps>();
    const [currentPage, setCurrentPage] =useState<number>(parseInt(getPageNumber(url) || '0')) // Page courante

   
    // Diviser les links en pages de 'itemsPerPage' éléments
    const totalPages = Math.ceil(links.length - 2); // Exclure Previous et Next
    const startIndex = currentPage - 1;
    const endIndex = startIndex + itemsPerPage;
    const paginatedLinks = links.slice(startIndex, endIndex);
  
    function getPageNumber(url:string): string | null  {
        const params = new URLSearchParams(url.split('?')[1]); // Récupère les paramètres après le '?'
        return params.get('page');
      }
    // Gestion de la navigation
    const goToPreviousPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 1);
    };
  
    const goToNextPage = () => {
      if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };
      
    return (
        <Pagination>
        <PaginationContent>
          {/* Bouton Précédent */}
          <PaginationItem>
            {currentPage!=1 && (
                <PaginationPrevious
                href={links[0].url}
               onClick={goToPreviousPage}
              //  disabled={currentPage === 0}
             />
            )}
          </PaginationItem>
  
          {/* Affichage des labels paginés */}
          {paginatedLinks.map((link, index) => (
            <PaginationItem key={index}>
              <PaginationLink href={link.url} isActive={link.active}>
               
                <span dangerouslySetInnerHTML={{ __html: link.label}}/>
              </PaginationLink>
            </PaginationItem>
          ))}
  
          {/* Bouton Suivant */}
          <PaginationItem>
            {currentPage !== totalPages && (
                <PaginationNext
                href={links[links.length - 1].url}
                onClick={goToNextPage}
                // disabled={currentPage === totalPages - 1}
               />
            )}
            
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
};

export default Paginations;
